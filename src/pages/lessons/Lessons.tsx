// import React from 'react';

import Card from '../../components/card/Card';
import List from '../../components/list/List';

function Lessons() {
	return (
		<>
			<h1>Lecciones</h1>
			<div className='py-8 w-full'>
        <List>
          <Card />
          <Card />
          <Card />
          <Card />
        </List>
				<List>
					<Card />
					<Card />
					<Card />
					<Card />
				</List>
			</div>
		</>
	);
}

export default Lessons;
