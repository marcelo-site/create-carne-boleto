export function isPossivelTelefoneBR(input: string) {
  // Remove tudo que não for número
  const numeberTel = input.replace(/\D/g, '');

  // Remove DDI se tiver
  const semDDI = numeberTel.startsWith('55') ? numeberTel.slice(2) : numeberTel;

  // Deve ter DDD + número (10 ou 11 dígitos)
  return semDDI.length === 10 || semDDI.length === 11;
}