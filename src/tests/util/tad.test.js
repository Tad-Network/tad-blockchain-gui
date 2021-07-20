const tad = require('../../util/tad');

describe('tad', () => {
  it('converts number mtad to tad', () => {
    const result = tad.mtad_to_tad(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mtad to tad', () => {
    const result = tad.mtad_to_tad('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mtad to tad string', () => {
    const result = tad.mtad_to_tad_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mtad to tad string', () => {
    const result = tad.mtad_to_tad_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number tad to mtad', () => {
    const result = tad.tad_to_mtad(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string tad to mtad', () => {
    const result = tad.tad_to_mtad('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mtad to colouredcoin', () => {
    const result = tad.mtad_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mtad to colouredcoin', () => {
    const result = tad.mtad_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mtad to colouredcoin string', () => {
    const result = tad.mtad_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mtad to colouredcoin string', () => {
    const result = tad.mtad_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mtad', () => {
    const result = tad.colouredcoin_to_mtad(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mtad', () => {
    const result = tad.colouredcoin_to_mtad('1000');

    expect(result).toBe(1000000);
  });
});
