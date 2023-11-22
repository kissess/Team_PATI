import cv2
import torch
import torchvision
import numpy as np
import time
from ultralytics import YOLO

# 두점 사이의 거리
def get_distance(kp_np, kp1, kp2):
    try:
        kp_arr1 = np.array([kp_np[0][kp1][0], kp_np[0][kp1][1]])
        kp_arr2 = np.array([kp_np[0][kp2][0], kp_np[0][kp2][1]])
        return np.linalg.norm(kp_arr1 - kp_arr2)
    except IndexError:
        #print("no detect")
        #this value mean treshold.
        return 640000
    
# 3점을 기반으로 한 두 직선의 각도(스쿼트, 레그레이즈, 크런치)
# 이때 축은 B점.
# = cosine 비교 알고리즘
def calculate_angle(kp_np, A, B, C):
    try:
        # Create vectors AB and BC
        AB = np.array([kp_np[0][B][0] - kp_np[0][A][0], kp_np[0][B][1] - kp_np[0][A][1]])
        BC = np.array([kp_np[0][C][0] - kp_np[0][B][0], kp_np[0][C][1] - kp_np[0][B][1]])

        # 백터 내적
        dot_product = np.dot(AB, BC)

        # 스칼라값(정규화)
        magnitude_AB = np.linalg.norm(AB)
        magnitude_BC = np.linalg.norm(BC)

        # Cos계산->정사영 사용
        cosine_angle = dot_product / (magnitude_AB * magnitude_BC)

        # 각도 계산(라디안)
        angle = np.arccos(cosine_angle)

        # 각도 변환(degree)
        angle_degrees = np.degrees(angle)

        return angle_degrees    
    except IndexError:
        #print("no detect")
        #각도값... 해당 값 이상은 그냥 예외처리할거임.
        return 640000 

def main(model_path,choosed_exercise,TargetCnt):

    cap = cv2.VideoCapture(0)

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(device,"is current using device")
    model = YOLO(model_path).to(device)
    
    if choosed_exercise == "squat" :
        CNT_FLAG=False
        CNT=1
        THN_angle=90
        acu=0
        avgarr = [80]
        
        while True:
            ret, frame = cap.read()
            
            if not ret:
                break

            results = model(frame, verbose=False)
            array_frame = results[0].keypoints.data.cpu().numpy()
            
            angle=calculate_angle(array_frame, 14, 12, 6)
            
            if angle != 640000:
                if angle > THN_angle and not CNT_FLAG:
                    CNT_FLAG = True
                    CNT += 1
                elif angle < (THN_angle-10) and CNT_FLAG:
                    CNT_FLAG = False
                
            if CNT_FLAG :
                dis = get_distance(array_frame, 13, 6)
                if dis != 640000:
                    acu = min(100,(dis/angle)*55)
                    avgarr.append(acu)
                    avg = sum(avgarr)/len(avgarr)

            cv2.putText(frame, f'Choosed EXC: {choosed_exercise}', (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
            cv2.putText(frame, f'Count: {CNT}', (450, 425), cv2.FONT_HERSHEY_SIMPLEX,0.7, (200, 0, 200), 2)
            cv2.putText(frame, f'Accuracy: {round(sum(avgarr)/len(avgarr),2)}', (450, 450), cv2.FONT_HERSHEY_SIMPLEX,0.7, (125, 0, 200), 2)
            cv2.imshow('Testing model function', frame)
            #cv2.imshow('Testing model function', annotated_frame)
        
            if cv2.waitKey(1) & 0xFF == 27:  # ESC to terminate program
                print("Terminate program")
                break
           
            if CNT >= TargetCnt :
                print("you reach the target")
                break
            
        cap.release()
        cv2.destroyAllWindows()
        avg = sum(avgarr)/len(avgarr)
        print("the average score of your posture is ",avg,"")
      
    elif choosed_exercise == "pushup":
        CNT_FLAG=False
        CNT=0
        acu=0
        avgarr = [80]
        
        while True:
            ret, frame = cap.read()
            
            if not ret:
                break

            results = model(frame, verbose=False)
            array_frame = results[0].keypoints.data.cpu().numpy()
            
            angle=calculate_angle(array_frame, 10, 8, 6)
            if angle != 640000:
                if angle >= 90 and not CNT_FLAG:
                    CNT_FLAG = True
                    CNT += 1
                elif angle < 90 and CNT_FLAG:
                    CNT_FLAG = False
                
            if CNT_FLAG : 
                dis = get_distance(array_frame, 10, 6)
                if dis != 640000:
                    acu1 = min(100,(dis/angle)*60)
                    angle_spine = calculate_angle(array_frame, 14, 12, 6)
                    if angle_spine != 640000:
                        acu2 = min(100,max(0,100-angle_spine))
                        avgarr.append((acu1+acu2)/2)
                        avg = sum(avgarr)/len(avgarr)
            
                
            cv2.putText(frame, f'Choosed EXC: {choosed_exercise}', (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
            cv2.putText(frame, f'Count: {CNT}', (450, 425), cv2.FONT_HERSHEY_SIMPLEX,0.7, (200, 0, 200), 2)
            cv2.putText(frame, f'Accuracy: {round(sum(avgarr)/len(avgarr),2)}', (450, 450), cv2.FONT_HERSHEY_SIMPLEX,0.7, (125, 0, 200), 2)
            cv2.imshow('Testing model function', frame)
        
            if cv2.waitKey(1) & 0xFF == 27:  # ESC to terminate program
                print("Terminate program")
                break

            if CNT >= TargetCnt :
                print("you reach the target")
                break

        cap.release()
        cv2.destroyAllWindows()
        avg = sum(avgarr)/len(avgarr)
        print("the average score of your posture is ",avg,"")
        
    elif choosed_exercise == "crunch":
        CNT_FLAG=False
        CNT=0
        #기준점 각도와 거리
        THN_angle=35
        #THN_distance=100
        #정확도 계산용 배열.
        acu=0
        avgarr = [100]
        
        while True:
            ret, frame = cap.read()
            
            if not ret:
                break

            results = model(frame, verbose=False)
            #annotated_frame = results[0].plot()
            array_frame = results[0].keypoints.data.cpu().numpy()
            
            #발목-골반-어깨의 각도
            angle=calculate_angle(array_frame, 16, 12, 6)
            
            if angle != 640000:
                if angle > THN_angle and not CNT_FLAG :
                    CNT_FLAG = True
                    CNT += 1
                if angle <= THN_angle and CNT_FLAG :
                    CNT_FLAG = False
                
            if CNT_FLAG :
                dis = get_distance(array_frame, 6, 14)
                #이완기 약 210~220 수축기 170이상. 크런치 기준, 싯업은 대략 150~160
                if dis != 640000:
                    acu = min(100,(290-dis))
                    avgarr.append(acu)
                    avg = sum(avgarr)/len(avgarr)
                
            #cv2.putText(frame, f'dis: {dis}', (30, 300), cv2.FONT_HERSHEY_SIMPLEX,1, (0, 255, 0), 2)    
            cv2.putText(frame, f'Choosed EXC: {choosed_exercise}', (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
            cv2.putText(frame, f'Count: {CNT}', (450, 425), cv2.FONT_HERSHEY_SIMPLEX,0.7, (200, 0, 200), 2)
            cv2.putText(frame, f'Accuracy: {round(sum(avgarr)/len(avgarr),2)}', (450, 450), cv2.FONT_HERSHEY_SIMPLEX,0.7, (125, 0, 200), 2)
            cv2.imshow('Testing model function', frame)
            #cv2.imshow('Testing model function', annotated_frame)
        
            if cv2.waitKey(1) & 0xFF == 27:  # ESC to terminate program
                print("Terminate program")
                break

            if CNT >= TargetCnt :
                print("you reach the target")
                break

        cap.release()
        cv2.destroyAllWindows()
        avg = sum(avgarr)/len(avgarr)
        print("the average score of your posture is ",avg,"")
        
    elif choosed_exercise == "llr": 
        CNT_FLAG=False
        CNT=0
        #기준점 각도와 거리
        THN_angle=60
        #THN_distance=100
        #정확도 계산용 배열.
        acu=0
        avgarr = [80]
        
        while True:
            ret, frame = cap.read()
            
            if not ret:
                break

            results = model(frame, verbose=False)
            #annotated_frame = results[0].plot()
            array_frame = results[0].keypoints.data.cpu().numpy()
            
            # 무릎-골반-어깨의 각도
            angle=calculate_angle(array_frame, 14, 12, 6)
            if angle != 640000:
                if angle > THN_angle and not CNT_FLAG :
                    CNT_FLAG = True
                    CNT += 1
                if angle <= 30 and CNT_FLAG :
                    CNT_FLAG = False
                
            if CNT_FLAG:
                #정확도 계산용>
                #다리가 얼마나 1자를 유지하는지(단 20도 정도는 굽혀줘도 지장이 없음.)
                angle_knee_ankle = calculate_angle(array_frame, 12, 14, 16)
                if angle_knee_ankle != 640000:
                    val_number_1 = min(100,max(25,100 - angle_knee_ankle + 20))
                    #허리가 뜨는지 안뜨는지를 구분 어깨, 골반, 코를 이용.
                    angle_spine = calculate_angle(array_frame, 0, 6, 12)
                    if angle_spine != 640000:
                        val_number_2 = min(100,max(25,100 - angle_spine + 35))
                
                        #이 부분은 운동 종목마다 다르게 결정됨.
                        acu = min(100,((val_number_1+val_number_2)/2+25))
                        avgarr.append(acu)
                        avg = sum(avgarr)/len(avgarr)
                
                        #cv2.putText(frame, f'angle_knee_ankle: {angle_knee_ankle}', (10, 50), cv2.FONT_HERSHEY_SIMPLEX,0.5, (200, 255, 200), 1)
                        #cv2.putText(frame, f'angle_spine: {angle_spine}', (10, 70), cv2.FONT_HERSHEY_SIMPLEX,0.5, (200, 255, 200), 1)

            #파라메터 확인용
            
            #화면 출력
            cv2.putText(frame, f'Choosed EXC: {choosed_exercise}', (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
            cv2.putText(frame, f'Count: {CNT}', (450, 425), cv2.FONT_HERSHEY_SIMPLEX,0.7, (200, 0, 200), 2)
            cv2.putText(frame, f'Accuracy: {round(sum(avgarr)/len(avgarr),2)}', (450, 450), cv2.FONT_HERSHEY_SIMPLEX,0.7, (125, 0, 200), 2)
            cv2.imshow('Testing model function', frame)
            #cv2.imshow('Testing model function', annotated_frame)
        
            if cv2.waitKey(1) & 0xFF == 27:  # ESC to terminate program
                print("Terminate program")
                break

            if CNT >= TargetCnt :
                print("you reach the target")
                break

        cap.release()
        cv2.destroyAllWindows()
        avg = sum(avgarr)/len(avgarr)
        print("the average score of your posture is ",avg,"")
        
    elif choosed_exercise == "plank":
        CNT_FLAG=False
        elapsed_time=0
        THN_angle=25
        acu=0
        avgarr = [100]
        start_time = time.time()  # 프로그램 시작 시간 기록
        elapsed_time = 0  # 경과 시간 초기화
        last_time = start_time  # 마지막으로 시간을 업데이트한 시점
        array_frame_late=None
        
        while True:
            ret, frame = cap.read()
            
            if not ret:
                break

            results = model(frame, verbose=False)
            array_frame = results[0].keypoints.data.cpu().numpy()
            
            angle=calculate_angle(array_frame, 14, 12, 6)
            angle_floor=calculate_angle(array_frame, 12, 6, 8)
            current_time = time.time()
            if angle != 640000 and angle_floor < 108:
                if angle < THN_angle and not CNT_FLAG:
                    # 허리가 일정 각도 이상 꺾이지 않았을 때
                    CNT_FLAG = True
                    last_time = current_time  # 시간 측정 재개

                elif angle >= THN_angle and CNT_FLAG:
                    # 허리가 일정 각도 이상 꺾였을 때
                    CNT_FLAG = False
                    elapsed_time += current_time - last_time  # 경과 시간 업데이트

                if CNT_FLAG:
                    # 현재 플랭크 자세가 적절한 경우, 경과 시간 계속 업데이트
                    elapsed_time += current_time - last_time
                    last_time = current_time
                    if array_frame_late is not None : #array_frame_late가 존재한다면.
                        for index in [6,8,10,12,14,16]:
                            current_position = np.array([array_frame[0][index][0], array_frame[0][index][1]])
                            previous_position = np.array([array_frame_late[0][index][0], array_frame_late[0][index][1]])
                            movement = np.linalg.norm(current_position - previous_position)
                            avgarr.append(max(0,100-(max(4,movement)-4)*20))
                            
                    array_frame_late = array_frame
                
            
                
            #cv2.putText(frame, f'angle: {angle_floor}', (30, 180), cv2.FONT_HERSHEY_SIMPLEX,0.7, (200, 0, 200), 2)    
            cv2.putText(frame, f'Choosed EXC: {choosed_exercise}', (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
            cv2.putText(frame, f'Time: {elapsed_time}', (450, 425), cv2.FONT_HERSHEY_SIMPLEX,0.7, (200, 0, 200), 2)
            cv2.putText(frame, f'accuracy: {round(sum(avgarr)/len(avgarr),2)}', (450, 450), cv2.FONT_HERSHEY_SIMPLEX,0.7, (125, 0, 200), 2)
            cv2.imshow('Testing model function', frame)
            #cv2.imshow('Testing model function', annotated_frame)
        
            if cv2.waitKey(1) & 0xFF == 27:  # ESC to terminate program
                print("Terminate program")
                break

            

        cap.release()
        cv2.destroyAllWindows()
        avg = sum(avgarr)/len(avgarr)
        print("the average score of your posture is ",avg,"")
        
    elif choosed_exercise == "berpee":
        #버피 동장 => 상체 숙이기 팔굽 그리고 다시 일어나기.
        CNT_FLAG_DOWN=False
        CNT_FLAG_UP=False
        CNT=0
        acu=0
        avgarr = [100]
        
        while True:
            ret, frame = cap.read()
            
            if not ret:
                break

            results = model(frame, verbose=False)
            array_frame = results[0].keypoints.data.cpu().numpy()
            
            angle_spine=calculate_angle(array_frame,6,12,14)
            angle_spine2=calculate_angle(array_frame,6,12,14)
            if angle_spine != 640000:
                if angle_spine < 100 and not CNT_FLAG_DOWN:
                    CNT_FLAG_DOWN = True
                if CNT_FLAG_DOWN == True and angle_spine > 140:
                    CNT_FLAG_UP = True
                if angle_spine < 90 and CNT_FLAG_DOWN and CNT_FLAG_UP :
                    CNT_FLAG_DOWN = False
                    CNT_FLAG_UP = False
                    cnt += 1
                
                if CNT_FLAG_UP :
                    dis = get_distance(array_frame, 10, 6)
                    if dis != 640000:
                        angle=calculate_angle(array_frame, 10, 8, 6)
                        acu1 = min(100,(dis/angle)*60)
                        angle_spine = calculate_angle(array_frame, 14, 12, 6)
                        if angle_spine != 640000:
                            acu2 = min(100,max(0,100-angle_spine))
                            avgarr.append((acu1+acu2)/2)
                            avg = sum(avgarr)/len(avgarr)
                
            cv2.putText(frame, f'Choosed EXC: {choosed_exercise}', (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
            cv2.putText(frame, f'Count: {CNT}', (450, 425), cv2.FONT_HERSHEY_SIMPLEX,0.7, (200, 0, 200), 2)
            cv2.putText(frame, f'Accuracy: {round(sum(avgarr)/len(avgarr),2)}', (450, 450), cv2.FONT_HERSHEY_SIMPLEX,0.7, (125, 0, 200), 2)
            cv2.imshow('Testing model function', frame)
            #cv2.imshow('Testing model function', annotated_frame)
        
            if cv2.waitKey(1) & 0xFF == 27:  # ESC to terminate program
                print("Terminate program")
                break

            if CNT >= TargetCnt :
                print("you reach the target")
                break

        cap.release()
        cv2.destroyAllWindows()
        avg = sum(avgarr)/len(avgarr)
        print("the average score of your posture is ",avg,"")

    else : 
        print("you have to input right exercise.")

    
if __name__ == "__main__":
    #model_path = 'F:/FinalBuild/PoseAnalysis.pt'
    model_path = './model_light.pt'
    choosed_exercise = "squat" #운동 종목 입력
    TargetNumber=100   #목표 횟수
    main(model_path,choosed_exercise,TargetNumber)
