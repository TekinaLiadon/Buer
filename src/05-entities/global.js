import {useUserStore} from "@/05-entities/user/userStore";
import {useCharactersStore} from "@/05-entities/characters/charactersStore";
import {useCoreStore} from "@/05-entities/core/coreStore";

export const g = {
    userStore: () => useUserStore(),
    coreStore: () => useCoreStore(),
    charactersStore: () => useCharactersStore()
}