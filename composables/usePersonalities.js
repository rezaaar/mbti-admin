export const usePersonalities = (answerList) => {
  // let answerList = [
  //   { questionCode: 'E1', result: 0, level: 60 },
  //   { questionCode: 'E2', result: 0, level: 20 },
  //   { questionCode: 'E3', result: 0, level: 20 },
  //   { questionCode: 'P1', result: 0, level: 60 },
  //   { questionCode: 'P2', result: 1, level: 20 },
  //   { questionCode: 'P3', result: 1, level: 20 },
  //   { questionCode: 'J1', result: 0, level: 40 },
  //   { questionCode: 'J2', result: 1, level: 20 },
  //   { questionCode: 'J3', result: 0, level: 40 },
  //   { questionCode: 'T1', result: 0, level: 35 },
  //   { questionCode: 'T2', result: 1, level: 35 },
  //   { questionCode: 'T3', result: 0, level: 30 },
  // ];

  // Function to calculate total level for given question codes and result
  function calculateTotalLevel(questionCodes, result) {
    let totalLevel = 0;
    for (let i = 0; i < answerList.length; i++) {
      if (questionCodes.includes(answerList[i].questionCode) && answerList[i].result === result) {
        totalLevel += answerList[i].level;
      }
    }
    return totalLevel;
  }

  // Check conditions and return personality types in an array
  function determinePersonalityType() {
    const E_total_0 = calculateTotalLevel(['E1', 'E2', 'E3'], 0);
    const E_total_1 = calculateTotalLevel(['E1', 'E2', 'E3'], 1);
    const E = E_total_0 > E_total_1 ? "E" : "I";

    const P_total_0 = calculateTotalLevel(['P1', 'P2', 'P3'], 0);
    const P_total_1 = calculateTotalLevel(['P1', 'P2', 'P3'], 1);
    const P = P_total_0 > P_total_1 ? "N" : "S";

    const J_total_0 = calculateTotalLevel(['J1', 'J2', 'J3'], 0);
    const J_total_1 = calculateTotalLevel(['J1', 'J2', 'J3'], 1);
    const J = J_total_0 > J_total_1 ? "F" : "T";

    const T_total_0 = calculateTotalLevel(['T1', 'T2', 'T3'], 0);
    const T_total_1 = calculateTotalLevel(['T1', 'T2', 'T3'], 1);
    const T = T_total_0 > T_total_1 ? "J" : "P";

    return [E, P, J, T];
  }

  // Output the result
  const personalityTypes = determinePersonalityType();
  console.log(personalityTypes);

  return personalityTypes
}
