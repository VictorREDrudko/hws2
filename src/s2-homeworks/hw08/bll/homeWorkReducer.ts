import {UserType} from '../HW8'

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortState = state.sort((a: UserType, b: UserType) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })

            // const sortDownState = state.sort((a: UserType, b: UserType) => {
            //   return a.name < b.name ? 1 : 0
            // })

            return action.payload === 'up' ? sortState : sortState.reverse()// need to fix
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }
