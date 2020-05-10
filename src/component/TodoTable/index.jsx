import React,{Fragment}  from 'react';
import {Link} from 'react-router-dom'
// import $ from 'jquery'; 
import DataTable, { createTheme,defaultThemes } from 'react-data-table-component';

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
    	// const content = window.content;
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
        // if ($.fn.DataTable.isDataTable( '#example2' )) 
        // {
	        const script = document.createElement("script");

	        script.src = 'js/content.js';
	        // script.async = true;

	        document.body.appendChild(script);

	        

        // }
    }

    render() {
        const { error, todos} = this.state;

        const columns = [
        {
        	name: 'Title',
        	selector: 'title',
        	sortable: true,
        },
        {
        	name: 'Description',
        	selector: 'description',
        	sortable: true,
        	right: true,
        },
        ];

  const customStyles = {
  header: {
    style: {
      minHeight: '56px',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: defaultThemes.default.divider.default,
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
};
        if(error) 
        {
            return (
                <div>Error: {error.message}</div>
            )
        } 
        else 
        {
            return (
            	<Fragment>
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
				                      	<DataTable
				                      	title="Todo List"
				                      	columns={columns}
				                      	data={todos}
				                      	customStyles={customStyles}
				                      	pagination
				                      	/>
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
            	</Fragment>
        	);
        }
    }
}
