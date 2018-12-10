
import { HAS_SIGN_IN } from "./actionTypes";

export const hasSignInSync = (info) => {
    return {
        type : HAS_SIGN_IN,
        info
    }
}