import { EFirstLevelCases } from "./first-level-cases.enum";
import { EFourthLevelCases } from "./fourth-level-cases.enum";
import { ESecondLevelCases } from "./second-level-cases.enum";
import { EThirdLevelCases } from "./third-level-cases.enum";

export enum EQuestionCases {
// Aqui vamos fazer o merge com o enum EFirstLevelCases, ESecondLevelCases, EThirdLevelCases, EFourthLevelCases, de caso a caso feito.
// exemplo de formato =  `${EFirstLevelCases.DIREITO_TRIBUTARIO}-${ESecondLevelCases.CONTENCIOSO}-${EThirdLevelCases.REPETICAO_INDEBITO}-${EFourthLevelCases.COBRANCA_TRIBUTO_INDEVIDO_EM_FACE_DA_LEGISLACAO_TRIBUTARIA_APLICAVEL}`
    CASE_1 = `${EFirstLevelCases.DIREITO_TRIBUTARIO}-${ESecondLevelCases.CONTENCIOSO}-${EThirdLevelCases.REPETICAO_INDEBITO}-${EFourthLevelCases.COBRANCA_TRIBUTO_INDEVIDO_EM_FACE_DA_LEGISLACAO_TRIBUTARIA_APLICAVEL}`
}

