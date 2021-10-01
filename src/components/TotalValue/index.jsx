import { AppBar, MenuItem, Toolbar } from '@mui/material'

const TotalValue = ({ products }) => {
	const totalShop = products.reduce((accumulator, item) => {
		return accumulator + item.price
	}, 0)

	const totalDiscount = products.reduce((accumulator, item) => {
		return accumulator + item.discount
	}, 0)
	return (
		<AppBar sx={{ backgroundColor: 'black' }}>
			<Toolbar>
				<MenuItem>Valor Total: R${totalShop - totalDiscount}</MenuItem>
				<MenuItem>Total de Descontos: R${totalDiscount.toFixed(2)}</MenuItem>
			</Toolbar>
		</AppBar>
	)
}

export default TotalValue
