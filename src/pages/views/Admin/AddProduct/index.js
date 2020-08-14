import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import {useForm} from "react-hook-form"
import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../firebase';


const AddProduct = ({ onAdd }) => {

    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let history = useHistory();
    
    const [desc, setDesc] = useState("");

    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
         // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    desc,
                    image: url
                }

                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
                history.push("/admin/products");
            })

    });
}

           

    return (
        <div>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">Thêm sản phẩm mới</h1>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <div className="container">
                        
                        <form onSubmit={handleSubmit(onHandleSubmit)}>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Tên sản phẩm</label>
                                <input
                                 ref={register({ required: true })} 
                                name="name" 
                                type="text" 
                                className="form-control" 
                                id="name-field" 
                                placeholder="Tên sản phẩm"  
                                />

                                {errors.name && errors.name.type === "required" && <span className="form-text text-danger">Không được để trống tên</span>}
                                {errors.name && errors.name.type === "minLength" && <span className="form-text text-danger">Bạn phải nhập ít nhất 5 ký tự</span>}
                            </div>

                         {/* <div className="form-group col-xs-6">
                                <label htmlFor="imagefile">Image</label>
                                <div className="input-group">

                                <input ref={register({ required: true })}  
                                name="image" 
                                type="file" 
                                className="custom-file-label" 
                                id="inputfile21"   
                                />
                                </div>
                                
                                <small id="imageHelp" className="form-text text-danger">{errors.image && <span>Please select an image</span>}</small>
                            </div>  */}


                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Image</label>
                        <div className="custom-file">
                            <input type="file" 
                            className="custom-file-label" 
                            id="inputGroupFile02" 
                            name="image"
                            ref={register({ required: true })}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Chọn ảnh</label>
                        </div>
                        <small id="imageHelp" className="form-text text-danger">{errors.image && <span>Yêu cầu chọn ảnh</span>}</small>
                    </div>


                            <div className="form-group col-xs-6">
                                <label htmlFor="productPrice">Giá thành</label>
                                <input
                                 ref={register({ required: true })} 
                                 name="price" 
                                 type="text" 
                                 aria-describedby="priceHelp"
                                 className="form-control" 
                                 id="productPrice" 
                                 placeholder="Giá tiền "  />
                                <small id="nameHelp" className="form-text text-danger">{errors.name && <span>Không được để trống giá tiền</span>}</small>
                            </div>


                            <div className="form-group col-xs-6">
                                <label htmlFor="productPrice">Giá thành sale</label>
                                <input
                                 ref={register({ required: true })} 
                                 name="pricesale" 
                                 type="text" 
                                 aria-describedby="priceHelp"
                                 className="form-control" 
                                 id="productPrice" 
                                 placeholder="Giá sale "  />
                                <small id="nameHelp" className="form-text text-danger">{errors.name && <span>Không được để trống giá tiền sale</span>}</small>
                            </div>

                    
                            {/* <div className="form-group col-xs-6">
                                <label htmlFor="name-field">MÔ tả Chi tiết sản phẩm</label>
                                <input
                                 ref={register({ required: true })} 
                                name="name" 
                                type="text" 
                                className="form-control" 
                                id="name-field" 
                                placeholder="Mô tả sản phẩm"  
                                />

                            {errors.name && errors.name.type === "required" && <span className="form-text text-danger">Không để được để trống mô tả</span>}
                                
                            </div> */}

                            <div class="form-group col-xs-6">
                            <label for="exampleFormControlTextarea1">Mô tả chi tiết sản phẩm</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                             name="mota"
                             type="text" 
                             placeholder="Mô tả sản phẩm" 
                                ref={register({ required: true })} 
                                 className="form-control"
                                    ></textarea>
                                     {errors.name && errors.name.type === "required" && <span className="form-text text-danger">Không để được để trống mô tả</span>}
                                </div>
                          
                            <div  className="form-group col-xs-12">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Thêm sản phẩm</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
</div>
    )
}

AddProduct.propTypes = {
    products: PropTypes.array
}

export default AddProduct