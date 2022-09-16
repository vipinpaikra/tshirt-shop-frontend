import React from "react";
import { API } from "../../backend";

function ImageHelper({ product }) {
    const imgurl = product
        ? `${API}/product/photo/${product._id}`
        : "https://images.unsplash.com/photo-1611772871226-9cc3057c4f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNtYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    return (
        <div className="rounded border border-success p-2">
            <img
                src={imgurl}
                alt="photo"
                style={{ maxHeight: "70%", maxWidth: "70%" }}
                className="mb-3 rounded "
            />
        </div>
    );
}

export default ImageHelper;
