export interface InitialState {
    user: User;
    recommendations: Recommendations[];
    interests: Interests[];
    currentStep: number;
    totalSteps: number;
}

type User = {
    name: string;
    email: string;
    password: string;
    photo: string;
};

type Recommendations = 'SI' | 'PE' | 'EF' | 'RR';
type Interests = 'GM' | 'FS' | 'MS' | 'RD';

export type ACTIONTYPE =
    | { type: 'next_step' }
    | { type: 'previous_step' }
    | { type: 'add_user_details'; payload: { [Key in keyof User]: string } }
    | { type: 'add_recommendations'; payload: Recommendations }
    | { type: 'add_interests'; payload: Interests };