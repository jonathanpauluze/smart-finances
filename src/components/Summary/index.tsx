import { useTransactions } from '../../hooks/useTransactions';

import { SummaryContainer } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'deposit') {
      accumulator.depositTotal += transaction.amount;
      accumulator.total += transaction.amount;
    } else {
      accumulator.withdrawTotal += transaction.amount;
      accumulator.total -= transaction.amount;
    }

    return accumulator;
  }, {
    depositTotal: 0,
    withdrawTotal: 0,
    total: 0
  });

  return (
    <SummaryContainer>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(summary.depositTotal)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdrawTotal)}
        </strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}  
        </strong>
      </div>
    </SummaryContainer>
  );
}