import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

const CadastreProducts = ({ setProducts, products }) => {
	const [id, setId] = useState()
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState()
	const [discount, setDiscount] = useState()

	const addNewProduct = () => {
		setProducts([
			...products,
			{
				code: id,
				name: name,
				description: description,
				price: price,
				discount: discount,
			},
		])
	}

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<Box
				sx={{
					marginTop: 10,
					display: 'flex',
					flexDirection: 'column',
					width: 300,
					alignItems: 'center',
				}}
			>
				<TextField
					placeholder='id'
					value={id}
					onChange={(e) => setId(Number(e.target.value))}
				/>
				<TextField
					placeholder='Nome do produto'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<TextField
					placeholder='Descrição'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<TextField
					placeholder='Preço'
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
				/>
				<TextField
					placeholder='Desconto'
					value={discount}
					onChange={(e) => setDiscount(Number(e.target.value))}
				/>
				<Button onClick={addNewProduct}>Adicionar Produtos</Button>
			</Box>
		</Box>
	)
}

export default CadastreProducts
