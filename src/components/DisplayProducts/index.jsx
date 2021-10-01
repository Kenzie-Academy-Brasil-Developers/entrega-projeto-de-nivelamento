import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import './styles.css'

const DisplayProducts = ({ products }) => {
	return (
		<Box>
			<div className='container'>
				{products.map((item, index) => (
					<Card className='product' key={index} sx={{ marginLeft: 2 }}>
						<Typography>{item.name}</Typography>
						<Typography> {item.description}</Typography>{' '}
						<Typography>
							Preço: R${item.price}, Desconto: R$
							{item.discount}
						</Typography>
					</Card>
				))}
			</div>
		</Box>
	)
}

export default DisplayProducts
