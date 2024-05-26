import { defineStore } from 'pinia'

export const useMyPersonalityStore = defineStore({
  id: 'myPersonalityStore',
  state: () => ({
    answerList: [],
    personality: null,
  }),
  actions: {
    addAnswer(answer) {
      this.answerList.push(answer)
    },

    calculateTotalLevel(questionCodes, result) {
      let totalLevel = 0;
      for (let i = 0; i < this.answerList.length; i++) {
        if (questionCodes.includes(this.answerList[i].questionCode) && this.answerList[i].result === result) {
          totalLevel += this.answerList[i].level;
        }
      }
      return totalLevel;
    },

    determinePersonalityType() {
      const E_total_0 = this.calculateTotalLevel(['E1', 'E2', 'E3'], 0);
      const E_total_1 = this.calculateTotalLevel(['E1', 'E2', 'E3'], 1);
      const EResult = E_total_0 > E_total_1 ? "E" : "I";
      const EData = {
        E_total_0,
        E_total_1,
        EResult
      }

      const P_total_0 = this.calculateTotalLevel(['P1', 'P2', 'P3'], 0);
      const P_total_1 = this.calculateTotalLevel(['P1', 'P2', 'P3'], 1);
      const PResult = P_total_0 > P_total_1 ? "N" : "S";
      const PData = {
        P_total_0,
        P_total_1,
        PResult
      }

      const J_total_0 = this.calculateTotalLevel(['J1', 'J2', 'J3'], 0);
      const J_total_1 = this.calculateTotalLevel(['J1', 'J2', 'J3'], 1);
      const JResult = J_total_0 > J_total_1 ? "F" : "T";
      const JData = {
        J_total_0,
        J_total_1,
        JResult
      }

      const T_total_0 = this.calculateTotalLevel(['T1', 'T2', 'T3'], 0);
      const T_total_1 = this.calculateTotalLevel(['T1', 'T2', 'T3'], 1);
      const TResult = T_total_0 > T_total_1 ? "J" : "P";
      const TData = {
        T_total_0,
        T_total_1,
        TResult
      }


      let personality = [EResult, PResult, JResult, TResult].join('').toLocaleLowerCase();
      let personalityData = {
        personality,
        EData,
        PData,
        JData,
        TData
      }

      return personalityData
    },

    getPersonalitiyDetail() {
      // fetch personalities
      let personalityResult = this.determinePersonalityType();
      this.personality = personalityResult;
    }
  }
})
