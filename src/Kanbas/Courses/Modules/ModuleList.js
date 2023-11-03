import { useParams } from "react-router-dom";
import React, { useState } from "react";
import db from "../../Database";
import "./index.css";
import { AiOutlineHolder } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  return (
    <ul className="list-group">
       <li className="list-group-item">
       <div className="moduleForm">
        <div style={{ padding: 10 }}>
        <input className="form-control" value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea className="form-control" value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        </div>
        <div className="module-addOptions">
        <button  onClick={() => dispatch(addModule({ ...module, course: courseId }))} type="button" class="btn btn-success">Add</button>
        <button onClick={() => dispatch(updateModule(module))} type="button" class="btn btn-primary">
                Update
        </button>
        </div>
      </div>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div className="collapsible ">
          <div className="header">
            <div style={{display:"flex"}}>
              <div>
              <AiOutlineHolder style={{ marginRight: 4 }}></AiOutlineHolder>
            <FaCaretRight style={{ marginRight: 4 }}></FaCaretRight>
              </div>
            <h5 style={{ padding: 0, margin: 0 }}>{module.name}</h5>
            </div>
            <div className="module-editOptions">
            <button
                  onClick={() => dispatch(deleteModule(module._id))} type="button" class="btn btn-danger">
                  Delete
                </button>
                <button
                  onClick={() => dispatch(setModule(module))} type="button" class="btn btn-warning">
                  Edit
                </button>
            </div>
          </div>
          <div >
              <div className="content">{module.description}</div>
          </div>
        </div>
        ))}
    </ul>
  );
}
export default ModuleList;
