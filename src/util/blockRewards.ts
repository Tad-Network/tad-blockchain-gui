import Big from 'big.js';

const MTAD_PER_TAD = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height === 0) {
    return MTAD_PER_TAD.times(300_000);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MTAD_PER_TAD.times(2);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MTAD_PER_TAD.times(1);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MTAD_PER_TAD.times(0.5);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MTAD_PER_TAD.times(0.25);
  }

  return MTAD_PER_TAD.times(0.125);
}

export function calculateBaseFarmerReward(height: number): Big {
  return MTAD_PER_TAD.times(0);

  if (height === 0) {
    return MTAD_PER_TAD.times(21000000).times(1 / 8);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MTAD_PER_TAD.times(2).times(1 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MTAD_PER_TAD.times(1).times(1 / 8);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MTAD_PER_TAD.times(0.5).times(1 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MTAD_PER_TAD.times(0.25).times(1 / 8);
  }

  return MTAD_PER_TAD.times(0.125).times(1 / 8);
}
