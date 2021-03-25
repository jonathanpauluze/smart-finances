import { TransactionsTableContainer } from './styles';

export function TransactionsTable() {
  return (
    <TransactionsTableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">+ R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2021</td>
          </tr>

          <tr>
            <td>Sofá 2 lugares</td>
            <td className="withdraw">- R$ 750,00</td>
            <td>Casa</td>
            <td>19/01/2021</td>
          </tr>

          <tr>
            <td>Bonificação do trabalho</td>
            <td className="deposit">+ R$ 1.500,00</td>
            <td>Trabalho</td>
            <td>18/01/2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionsTableContainer>
  );
}
