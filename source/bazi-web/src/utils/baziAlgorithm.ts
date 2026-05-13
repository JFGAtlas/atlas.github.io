export const WuXingTable = ['金', '木', '水', '火', '土'];
export const TianGan = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
export const DiZhi = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];

export const TianGan_WuXingProp = [1, 1, 3, 3, 4, 4, 0, 0, 2, 2];
export const DiZhi_WuXingProp = [2, 4, 1, 1, 4, 3, 3, 4, 0, 0, 4, 2];

export const GenerationSourceTable = [4, 2, 0, 1, 3];

export const TianGan_Strength: number[][] = [
  [1.2, 1.2, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.2, 1.2],
  [1.06, 1.06, 1.0, 1.0, 1.1, 1.1, 1.14, 1.14, 1.1, 1.1],
  [1.14, 1.14, 1.2, 1.2, 1.06, 1.06, 1.0, 1.0, 1.0, 1.0],
  [1.2, 1.2, 1.2, 1.2, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
  [1.1, 1.1, 1.06, 1.06, 1.1, 1.1, 1.1, 1.1, 1.04, 1.04],
  [1.0, 1.0, 1.14, 1.14, 1.14, 1.14, 1.06, 1.06, 1.06, 1.06],
  [1.0, 1.0, 1.2, 1.2, 1.2, 1.2, 1.0, 1.0, 1.0, 1.0],
  [1.04, 1.04, 1.1, 1.1, 1.16, 1.16, 1.1, 1.1, 1.0, 1.0],
  [1.06, 1.06, 1.0, 1.0, 1.0, 1.0, 1.14, 1.14, 1.2, 1.2],
  [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.2, 1.2, 1.2, 1.2],
  [1.0, 1.0, 1.04, 1.04, 1.14, 1.14, 1.16, 1.16, 1.06, 1.06],
  [1.2, 1.2, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.14, 1.14]
];

export interface ZiStrength {
  diZhi: string;
  zhiCang: string;
  strength: number[];
}

export const DiZhi_Strength: ZiStrength[] = [
  { diZhi: '子', zhiCang: '癸', strength: [1.2, 1.1, 1.0, 1.0, 1.04, 1.06, 1.0, 1.0, 1.2, 1.2, 1.06, 1.14] },
  { diZhi: '丑', zhiCang: '癸', strength: [0.36, 0.33, 0.3, 0.3, 0.312, 0.318, 0.3, 0.3, 0.36, 0.36, 0.318, 0.342] },
  { diZhi: '丑', zhiCang: '辛', strength: [0.2, 0.228, 0.2, 0.2, 0.23, 0.212, 0.2, 0.22, 0.228, 0.248, 0.232, 0.2] },
  { diZhi: '丑', zhiCang: '己', strength: [0.5, 0.55, 0.53, 0.5, 0.55, 0.57, 0.6, 0.58, 0.5, 0.5, 0.57, 0.5] },
  { diZhi: '寅', zhiCang: '丙', strength: [0.3, 0.3, 0.36, 0.36, 0.318, 0.342, 0.36, 0.33, 0.3, 0.3, 0.342, 0.318] },
  { diZhi: '寅', zhiCang: '甲', strength: [0.84, 0.742, 0.798, 0.84, 0.77, 0.7, 0.7, 0.728, 0.742, 0.7, 0.7, 0.84] },
  { diZhi: '卯', zhiCang: '乙', strength: [1.2, 1.06, 1.14, 1.2, 1.1, 1.0, 1.0, 1.04, 1.06, 1.0, 1.0, 1.2] },
  { diZhi: '辰', zhiCang: '乙', strength: [0.36, 0.318, 0.342, 0.36, 0.33, 0.3, 0.3, 0.312, 0.318, 0.3, 0.3, 0.36] },
  { diZhi: '辰', zhiCang: '癸', strength: [0.24, 0.22, 0.2, 0.2, 0.208, 0.2, 0.2, 0.2, 0.24, 0.24, 0.212, 0.228] },
  { diZhi: '辰', zhiCang: '戊', strength: [0.5, 0.55, 0.53, 0.5, 0.55, 0.6, 0.6, 0.58, 0.5, 0.5, 0.57, 0.5] },
  { diZhi: '巳', zhiCang: '庚', strength: [0.3, 0.342, 0.3, 0.3, 0.33, 0.3, 0.3, 0.33, 0.342, 0.36, 0.348, 0.3] },
  { diZhi: '巳', zhiCang: '丙', strength: [0.7, 0.7, 0.84, 0.84, 0.742, 0.84, 0.84, 0.798, 0.7, 0.7, 0.728, 0.742] },
  { diZhi: '午', zhiCang: '丁', strength: [1.0, 1.0, 1.2, 1.2, 1.06, 1.14, 1.2, 1.1, 1.0, 1.0, 1.04, 1.06] },
  { diZhi: '未', zhiCang: '丁', strength: [0.3, 0.3, 0.36, 0.36, 0.318, 0.342, 0.36, 0.33, 0.3, 0.3, 0.312, 0.318] },
  { diZhi: '未', zhiCang: '乙', strength: [0.24, 0.212, 0.228, 0.24, 0.22, 0.2, 0.2, 0.208, 0.212, 0.2, 0.2, 0.24] },
  { diZhi: '未', zhiCang: '己', strength: [0.5, 0.55, 0.53, 0.5, 0.55, 0.57, 0.6, 0.58, 0.5, 0.5, 0.57, 0.5] },
  { diZhi: '申', zhiCang: '壬', strength: [0.36, 0.33, 0.3, 0.3, 0.312, 0.318, 0.3, 0.3, 0.36, 0.36, 0.318, 0.342] },
  { diZhi: '申', zhiCang: '庚', strength: [0.7, 0.798, 0.7, 0.7, 0.77, 0.742, 0.7, 0.77, 0.798, 0.84, 0.812, 0.7] },
  { diZhi: '酉', zhiCang: '辛', strength: [1.0, 1.14, 1.0, 1.0, 1.1, 1.06, 1.0, 1.1, 1.14, 1.2, 1.16, 1.0] },
  { diZhi: '戌', zhiCang: '辛', strength: [0.3, 0.342, 0.3, 0.3, 0.33, 0.318, 0.3, 0.33, 0.342, 0.36, 0.348, 0.3] },
  { diZhi: '戌', zhiCang: '丁', strength: [0.2, 0.2, 0.24, 0.24, 0.212, 0.228, 0.24, 0.22, 0.2, 0.2, 0.208, 0.212] },
  { diZhi: '戌', zhiCang: '戊', strength: [0.5, 0.55, 0.53, 0.5, 0.55, 0.57, 0.6, 0.58, 0.5, 0.5, 0.57, 0.5] },
  { diZhi: '亥', zhiCang: '甲', strength: [0.36, 0.318, 0.342, 0.36, 0.33, 0.3, 0.3, 0.312, 0.318, 0.3, 0.3, 0.36] },
  { diZhi: '亥', zhiCang: '壬', strength: [0.84, 0.77, 0.7, 0.7, 0.728, 0.742, 0.7, 0.7, 0.84, 0.84, 0.724, 0.798] }
];

export interface BaziResult {
  bazi: string;
  wuxingStrengths: {
    wuxing: string;
    tianGanStrength: number;
    zhiCangStrength: number;
    total: number;
  }[];
  fateProp: string;
  tongLei: number;
  tongLeiProps: string[];
  yiLei: number;
  yiLeiProps: string[];
  balance: string;
  recommendation: string;
}

export function evaluateBazi(bazi: string): BaziResult | null {
  if (bazi.length !== 8) return null;

  const monthIndex = DiZhi.indexOf(bazi[3]);
  if (monthIndex === -1) return null;

  const wuxingStrengths = [];
  const strengthResult = new Array(5).fill(0);

  for (let wuXing = 0; wuXing < 5; wuXing++) {
    let value1 = 0.0;
    let value2 = 0.0;

    for (let i = 0; i < 8; i += 2) {
      const gan = bazi[i];
      const index = TianGan.indexOf(gan);
      if (index === -1) return null;

      if (TianGan_WuXingProp[index] === wuXing) {
        value1 += TianGan_Strength[monthIndex][index];
      }
    }

    for (let i = 1; i < 8; i += 2) {
      const zhi = bazi[i];
      for (const zs of DiZhi_Strength) {
        if (zs.diZhi === zhi) {
          const zhiCangIndex = TianGan.indexOf(zs.zhiCang);
          if (zhiCangIndex === -1) return null;
          if (TianGan_WuXingProp[zhiCangIndex] === wuXing) {
            value2 += zs.strength[monthIndex];
            break;
          }
        }
      }
    }

    strengthResult[wuXing] = value1 + value2;
    wuxingStrengths.push({
      wuxing: WuXingTable[wuXing],
      tianGanStrength: value1,
      zhiCangStrength: value2,
      total: value1 + value2
    });
  }

  const dayGan = bazi[4];
  const fatePropIndex = TianGan_WuXingProp[TianGan.indexOf(dayGan)];
  if (fatePropIndex === undefined || fatePropIndex === -1) return null;

  const srcPropIndex = GenerationSourceTable[fatePropIndex];

  const tongLei = strengthResult[fatePropIndex] + strengthResult[srcPropIndex];
  let yiLei = 0.0;
  for (let i = 0; i < 5; i++) yiLei += strengthResult[i];
  yiLei -= tongLei;

  let balance: string;
  let recommendation: string;

  const diff = tongLei - yiLei;
  if (Math.abs(diff) < 1) {
    balance = '五行较平衡';
    recommendation = '人生平顺。';
  } else if (diff > 0) {
    balance = '日主强（同类强）';
    const yiLeiProps = WuXingTable.filter((_, idx) => idx !== fatePropIndex && idx !== srcPropIndex);
    recommendation = `宜补：${yiLeiProps.join('、')}。以达到五行平衡。`;
  } else {
    balance = '日主弱（异类强）';
    recommendation = `宜补：${WuXingTable[fatePropIndex]}、${WuXingTable[srcPropIndex]}。以达到五行平衡。`;
  }

  return {
    bazi,
    wuxingStrengths,
    fateProp: WuXingTable[fatePropIndex],
    tongLei,
    tongLeiProps: [WuXingTable[fatePropIndex], WuXingTable[srcPropIndex]],
    yiLei,
    yiLeiProps: WuXingTable.filter((_, idx) => idx !== fatePropIndex && idx !== srcPropIndex),
    balance,
    recommendation
  };
}
