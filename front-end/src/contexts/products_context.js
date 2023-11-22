import { createContext, useContext, useReducer } from 'react';

import Pushup from "static/images/Exercise/PUSHUP.png";
import Crunch from 'static/images/Exercise/CRUNCH.png';
import Burpee from 'static/images/Exercise/BURPEE.png';
import Legrise from "static/images/Exercise/LEGRISE.png";
import Plank from "static/images/Exercise/PLANK.png";
import Squat from "static/images/Exercise/SQUAT.png";

// State
const initialProducts  = [
    {
        id : 1,
        exerciseName: 'Push-up', cal: 0.4, name: "팔굽혀펴기", cat: "상체",
        cart: false, url : Pushup,
        des: "팔을 펴고 몸을 드는 동작으로 가슴, 어깨, 삼두근을 강화하는 운동이다. \n양손을 좁게 잡으면 가슴 근육, 넓게 잡으면 등 근육, 어깨너비와 비슷하게 잡으면 팔근육을 강화할 수 있다. \n팔꿈치가 몸쪽으로 가도록 수행해야 팔꿈치 부상을 예방할 수 있다."
    },

    {
        id : 2,
        exerciseName: 'Crunch', cal: 0.2, name: "크런치", cat: "상복부",
        cart: false, url : Crunch,
        des: "누워 상체를 들어 올리고 복부 근육을 수축시키는 운동이다. \n윗몸일으키기에 비해 왕복 거리는 짧으나, 복근에 가해지는 자극은 비슷하다."
    },

    {
        id : 3,
        exerciseName: 'Burpee', cal: 4, name: "버피 테스트", cat: "전신",
        cart: false, url: Burpee,
        des: "서 있는 상태에서 몸을 숙인 후 팔굽혀펴기를 한 후 다시 일어나는 동작을 반복한다.\n하체와 상체, 그리고 순간적인 코어 근육을 모두 사용한다.\n시간당 소모 칼로리는 플랭크보다는 낮으나 지속 가능한 시간이 길어 한 번에 많은 열량을 소모할 수 있다."
    },

    {
        id : 4,
        exerciseName: 'Legrise', cal: 0.3, name: '라잉 레그라이즈', cat : "하복부",
        cart: false, url : Legrise,
        des: "누워 다리를 들어 올려 하복부 근육을 강화하는 운동이다. \n수행 시, 허리가 지지대 역할을 하므로 허리가 땅에 닿지 않도록 주의해야 한다."
    },

    {
        id : 5,
        exerciseName: 'Plank', cal: 0.3, name: "플랭크", cat: "코어",
        cart: false, url: Plank,
        des: "팔꿈치와 발가락을 바닥에 대고 몸을 일직선으로 유지하는 운동이며, 허리와 관절, 힘줄, 인대를 사용하지 않고 근육만을 사용하는 운동이다. \n허리디스크 재활 운동에도 효과가 있으며, 단기간에 많은 열량을 소모할 수 있으나, 운동 강도가 매우 높다."
    },

    {
        id : 6,
        exerciseName: 'Squat', cal: 0.4, name: "스쿼트", cat: "하체",
        cart: false, url : Squat,
        des: "발을 어깨너비로 벌리고 손을 앞으로 뻗어서 상체를 일직선으로 유지하며 무릎을 굽힌 후, 엉덩이를 뒤로 내밀어 천천히 내려가다가 다시 일어나는 동작을 반복한다. \n이때, 상체를 앞으로 굽히지 않도록 주의해야 한다."
    }
];

// Reducer
function productReducer(state, action) {
    switch (action.type) {
      // 상품 업데이트 (장바구니 상태)
      case 'CART_IMPORT':
        return state.map(product =>
          action.ids.includes(product.id) ? { ...product, cart: true } : product
        );
  
      // 장바구니 추가
      case 'CART_ADD':
        return state.map(product =>
          product.id === action.id ? { ...product, cart: true } : product
        );
  
      // 장바구니 삭제
      case 'CART_REMOVE':
        return state.map(product =>
          product.id === action.id ? { ...product, cart: false } : product
        );
  
      // 장바구니 선택 삭제
      case 'CART_SELECT_REMOVE':
        const checkedIds = action.checked.map(check => check.id);
        console.log(checkedIds);
        return state.map(product =>
          checkedIds.includes(product.id) ? { ...product, cart: false } : product
        );
      default:
        throw new Error(`Invalid action type ${action.type}`);
    }
  }
  
  // Context API
  const ProductStateContext = createContext();
  const ProductDispatchContext = createContext();
  
  // useContext
  export function useProductState() {
    const context = useContext(ProductStateContext);
    if (!context) throw new Error('Cannot find ProductState');
    return context;
  }
  
  export function useProductDispatch() {
    const context = useContext(ProductDispatchContext);
    if (!context) throw new Error('Cannot find ProductDispatch');
    return context;
  }
  
  // Provider
  export function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(productReducer, initialProducts );
    return (
      <ProductStateContext.Provider value={state}>
        <ProductDispatchContext.Provider value={dispatch}>
          {children}
        </ProductDispatchContext.Provider>
      </ProductStateContext.Provider>
    );
  }