const todolist = () =>{
    return(
        <>
        <div className="container">
		<div className="row">	
			<div className="intro col-12">
				<h1>WELCOME TO MY TO-DO LIST</h1>
			</div>
		</div>

		<div className="row">
			<div className="userInput1 col-12 ">
				<input id="userInput" type="text" placeholder="ADD ITEMS..."/>
				<button id="enter"><i className="fas fa-pencil-alt"></i></button>
			</div>
		</div>

		<div className="row1">
			<div className="col-12">
				<ul className="col-6" >
				</ul>
			</div>
		</div>

	</div>
        </>
    );
}

export default todolist;