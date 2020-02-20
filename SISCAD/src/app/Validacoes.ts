import { AbstractControl } from '../../node_modules/@angular/forms';

export class Validacoes {




    static ValidaData(controle: AbstractControl) {


        const data = controle.value;

        if (data == null) { return null; }


        const resultado = data.split('/');
        const dia = Number(resultado[0]);
        const mes = Number(resultado[1]);
        const ano = Number(resultado[2]);

        const dataRetornada = new Date(ano + '-' + mes + '-' + dia);

        const resultadoRetornada = dataRetornada.toLocaleDateString().split('/');

        const diaRetornado = Number(resultadoRetornada[0]);
        const mesRetornado = Number(resultadoRetornada[1]);
        const anoRetornado = Number(resultadoRetornada[2]);

        if (dia === diaRetornado && mes === mesRetornado && ano === anoRetornado && anoRetornado > 1500) {
          return null;
        } else {
            return { dataInvalida: true };
        }



      }








  static ValidaCpf(controle: AbstractControl) {


    const vcpf = controle.value;

    if (vcpf == null) { return null; }

    let  cpf: string ;


    cpf = vcpf;
    cpf =  cpf.replace(/\D/g, '') ;





    let  soma: number ;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');
    soma = 0;

    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999' ||
      !regex.test(cpf)
    ) {
      valido = false;
    } else {
      for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
      }
      resto = (soma * 10) % 11;

      if (resto === 10 || resto === 11) { resto = 0; }

      if (resto !== parseInt(cpf.substring(9, 10), 10)) { valido = false; }

      soma = 0;
      for (let i = 1; i <= 10; i++) {

        soma = soma + parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
      }
      resto = (soma * 10) % 11;

      if (resto === 10 || resto === 11) { resto = 0; }

      if (resto !== parseInt(cpf.substring(10, 11), 10)) { valido = false; }
      valido = true;
    }

    if (valido) { return null; }

    return { cpfInvalido: true };
  }











  static MaiorQue18Anos(controle: AbstractControl) {
    const nascimento = controle.value;
    const [ano, mes, dia] = nascimento.split('-');
    const hoje = new Date();
    const dataNascimento = new Date(ano, mes, dia, 0, 0, 0);
    const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; // 18 anos em mili segundos...

    if (hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste) {
      return null;
    }

    return { menorDeIdade: true };
  }

  static SenhasCombinam(controle: AbstractControl) {
    const senha = controle.get('senha').value;
    const confirmarSenha = controle.get('confirmarSenha').value;

    if (senha === confirmarSenha) { return null; }

    controle.get('confirmarSenha').setErrors({ senhasNaoCoincidem: true });
  }
}
