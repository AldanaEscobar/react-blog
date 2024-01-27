import axios from "axios";
import React from "react";
import "../style/postCard.css";
import getUsers from "../services/userService.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function PostCard({ post, getUsers }) {
    const handleTagClick = (tag) => {
        localStorage.setItem("selectedTag", tag);
        window.location.href = `/tags/${tag}`;
        const filteredPosts = allPosts.filter(post => post.tags.map(tag => tag.toLowerCase()).includes(selectedTag.toLowerCase()));
      };
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
        {post.tags.map((tag, index) => (
          <span key={index} className="tagPost" onClick={() => handleTagClick(tag)}>
            {tag}
          </span>
  ))}
</div>
        <div>
          <p className="datePost">Fecha de Publicación: {new Date(post.publishDate).toLocaleString()}</p>
          <p className="likePost"> <FontAwesomeIcon icon={faHeart} className="heart-icon" /> {post.likes}</p>
        </div>
      </div>
    );
  }