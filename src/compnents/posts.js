import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/postCard.css";
import getUserInfo from "../services/userService.js";

export function PostCard({ post }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await getUserInfo(post.owner);
      setUserInfo(info);
    };

    fetchUserInfo();
  }, [post.owner]);

  return (
    <div className="PostCard">
      <img src={post.image} alt="" />
      <p>{post.text}</p>
      {userInfo && (
        <div className="user-info">
          <p>Usuario: {userInfo.firstName} {userInfo.lastName}</p>
        </div>
      )}
      <div>
        <p>Etiquetas: {post.tags.join(', ')}</p>
      </div>
      <div className="date-likes">
        <p>Fecha de Publicación: {new Date(post.publishDate).toLocaleString()}</p>
        <p className="like-heart">❤️ {post.likes}</p>
      </div>
    </div>
  );
}
