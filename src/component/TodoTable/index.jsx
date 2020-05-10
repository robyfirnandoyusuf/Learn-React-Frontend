import React  from 'react';
import {Link} from 'react-router-dom'

export default class index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            todos: [],
            response: {}
        }
    }

    componentDidMount() {
        const apiUrl = 'http://localheart:8000/todo/list';

        fetch(apiUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    no: this.state.no + 1,
                    todos: result.message
                });
            },
            (error) => {
                this.setState({ error });
            }
        )

        const script = document.createElement("script");

        script.src = 'js/content.js';
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        const { error, todos} = this.state;

        if(error) 
        {
            return (
                <div>Error: {error.message}</div>
            )
        } 
        else 
        {
            return (
	            <div>
		            {/* Main content */}
		            <section className="content">
		                <div className="row">
		                  	<div className="col-12">
			                    <div className="card">
			                      	<div className="card-header">
			                        	<h3 className="card-title">
			                        		<Link to="/add" className="btn btn-primary btn-block">Add Todo</Link>
			                        	</h3>
			                      	</div>
			                      	{/* /.card-header */}
			                      	<div className="card-body">
			                        <table id="example2" className="table table-bordered table-hover">
			                          	<thead>
				                            <tr>
				                              	<th>No</th>
				                              	<th>Title</th>
				                              	<th>Description</th>
				                            </tr>
			                          	</thead>
			                          	<tbody>
			                              	{todos.map(( listValue, index ) => {
			                              	return (
				                                <tr key={index}>
				                                <td>{index+1}</td>
				                                <td>{listValue.title}</td>
				                                <td>{listValue.description}</td>
				                                </tr>
			                                  );
			                              	})}
			                          	</tbody>
			                          	<tfoot>
			                            <tr>
			                              	<th>No</th>
			                              	<th>Title</th>
			                              	<th>Description</th>
			                            </tr>
			                          	</tfoot>
			                        </table>
			                      </div>
			                      {/* /.card-body */}
			                    </div>
		                    	{/* /.card */}
		                  	</div>
		                  	{/* /.col */}
		                </div>
		                {/* /.row */}
		            </section>
		            {/* /.content */}
	            </div>
        	);
        }
    }
}
