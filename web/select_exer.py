class ExerciseData:
    def __init__(self, exercises):
        self.exercises = exercises

    def to_dict(self):
        return {
            'exercises': self.exercises
        }
