function retornaSeriesDisney(serie){
	return (serie.servico == 'Disney+');
}

function retornaSeriesHBO(serie){
	return (serie.servico == 'Netflix');
}

export {retornaSeriesDisney, retornaSeriesHBO};