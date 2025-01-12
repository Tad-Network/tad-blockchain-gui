const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Tad {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const tad_formatter = (value, unit) => new Tad(value, unit);

tad_formatter.convert = convert;
tad_formatter.setDisplay = units.setDisplay;
tad_formatter.setUnit = units.setUnit;
tad_formatter.getUnit = units.getUnit;
tad_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const mtad_to_tad = (mtad) => {
  return tad_formatter(Number.parseInt(mtad), 'mtad').to('tad').value();
};

export const tad_to_mtad = (tad) => {
  return tad_formatter(Number.parseFloat(Number(tad)), 'tad')
    .to('mtad')
    .value();
};

export const mtad_to_tad_string = (mtad) => {
  return tad_formatter(Number(mtad), 'mtad').to('tad').toString();
};

export const mtad_to_colouredcoin = (mtad) => {
  return tad_formatter(Number.parseInt(mtad), 'mtad')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_mtad = (colouredcoin) => {
  return tad_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('mtad')
    .value();
};

export const mtad_to_colouredcoin_string = (mtad) => {
  return tad_formatter(Number(mtad), 'mtad').to('colouredcoin').toString();
};
