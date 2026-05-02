export function normalizeTelefonePix(input: string) {
  if (!input || typeof input !== 'string') return null;

  let numberTel = input.replace(/\D/g, '');

  // Remove zeros à esquerda
  numberTel = numberTel.replace(/^0+/, '');

  // Se já tiver DDI
  if (numberTel.startsWith('55')) {
    const numberDDI = numberTel.slice(2);

    if (numberDDI.length === 10 || numberDDI.length === 11) {
      return `+55${numberDDI}`;
    }
    return null;
  }

  // Sem DDI
  if (numberTel.length === 10 || numberTel.length === 11) {
    return `+55${numberTel}`;
  }

  return null;
}