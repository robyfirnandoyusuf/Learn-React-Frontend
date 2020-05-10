import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Add extends Component {
	render() {
		return (
			<div>
			    {/* Content Header (Page header) */}
			    <section className="content-header">
			        <div className="container-fluid">
			            <div className="row mb-2">
			                <div className="col-sm-6">
			                    <h1>Add Todo</h1>
			                </div>
			                <div className="col-sm-6">
			                    <ol className="breadcrumb float-sm-right">
			                        <li className="breadcrumb-item">
			                            <Link to="/">Listing</Link>
			                        </li>
			                        <li className="breadcrumb-item active">Add Todo</li>
			                    </ol>
			                </div>
			            </div>
			        </div>
			        {/* /.container-fluid */}
			    </section>
			    {/* Main content */}
			    <section className="content">
			        <div className="container-fluid">
			            {/* SELECT2 EXAMPLE */}
			            <div className="card card-default">
			                <div className="card-header">
			                    <h3 className="card-title"></h3>
			                    <div className="card-tools">
			                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
			                            <i className="fas fa-minus" />
			                        </button>
			                        <button type="button" className="btn btn-tool" data-card-widget="remove">
			                            <i className="fas fa-remove" />
			                        </button>
			                    </div>
			                </div>
			                {/* /.card-header */}
			                <div className="card-body">
			                    <div className="row">
			                        <div className="col-md-6">
			                            <div className="form-group">
			                                <label>Title</label>
			                                <input className="form-control" name="title"></input>
			                            </div>
			                            {/* /.form-group */}
			                            <div className="form-group">
			                                <label>Description</label>
			                                <textarea className="form-control"></textarea>
			                            </div>
			                            {/* /.form-group */}
			                        </div>
			                        {/* /.col */}
			                    </div>
			                    {/* /.row */}
			                </div>
			                {/* /.card-body */}
			                <div className="card-footer">
			                    <button className="btn btn-primary">Save</button>
			                </div>
			            </div>
			            
			        </div>
			        {/* /.container-fluid */}
			    </section>
			    {/* /.content */}
			</div>
		);
	}
}
