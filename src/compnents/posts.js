import axios from "axios";
import React, { useState } from "react";
import "../style/postCard.css";
import getUsers from "../services/userService.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export function PostCard({ post, getUsers }) {
    return (
        <div className="PostCard">
        <img src={post.image} alt="" />
        <p className="titlePost">{post.text}</p>
        {getUsers && (
          <div className="userPost">
            <p>Usuario: {getUsers.firstName} {getUsers.lastName}</p>
          </div>
        )}
        <div>
          <p className="tagPost">{post.tags.join(', ')}</p>
        </div>
        <div>
          <p className="datePost">Fecha de Publicación: {new Date(post.publishDate).toLocaleString()}</p>
          <p className="likePost"> <FontAwesomeIcon icon={faHeart} className="heart-icon" /> {post.likes}</p>
        </div>
      </div>
    );
  }