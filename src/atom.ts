//recoil이 React19 호환이 되지 않아 jotai로 변경
//전역 상태 관리는 props가 최소 2depth 이상 내려갈 경우 사용을 고려
import { atom } from "jotai";

export const isDarkAtom = atom(false);
