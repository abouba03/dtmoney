import {Container} from './styles'


export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desemvolvemento de Website</td>
                        <td className='entrada'>$100,000</td>
                        <td>Desemvolvemento</td>
                        <td>01/01/2017</td>
                    </tr>
                    <tr>
                        <td>Desemvolvemento de Website</td>
                        <td  className='saida'>- $100,000</td>
                        <td>Desemvolvemento</td>
                        <td>01/01/2017</td>
                    </tr>
                    <tr className='entrada'>
                        <td>Desemvolvemento de Website</td>
                        <td className='entrada'>$100,000</td>
                        <td>Desemvolvemento</td> 
                        <td>01/01/2017</td>
                    </tr>
                </tbody>
            </table>
        </Container>

    )
}