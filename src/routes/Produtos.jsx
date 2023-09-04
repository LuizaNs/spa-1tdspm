import { ListaProdutos } from "../components/ListaProdutos";

export default function Produtos() {
  document.title = "Produtos";

  const estiloDasCelulas = {
    border:"2px solid #ccc",
    fontFamily: "Arial, "Treb
  }

  return (
    <div>
      <h1>Produtos</h1>

      <table style={{border:"2px solid #ccc"}}>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th>DESCRIÇÃO</th>
          <th>PREÇO</th>
        </tr>

        {
          ListaProdutos.map((item, indice)=>(
            <tr key={indice}>
              <td style= {estiloDasCelulas}>{item.id}</td> 
             <td style={estiloDasCelulas}>{item.nome}</td> 
             <td style={estiloDasCelulas}>{item.desc}</td> 
             <td style={estiloDasCelulas}>{item.valor}</td>
            </tr>
          ))
        }
</tbody>
</tfoot>



      </table>
    </div>
  )
}
