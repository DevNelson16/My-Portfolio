import { useState } from "react";
import { createPortal } from "react-dom";

import type { Project } from "../../types";
import styles from "./Projects.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectCard({ project }: { project: Project }) {
  const images = project.images ?? [];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  function nextImage() {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  }

  function previousImage() {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + images.length) % images.length
      );
    }
  }

  return (
    <article className={styles.card}>
      <div className={styles.iconRow}>
        {images.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={images.length > 1}
            className={styles.imageSlider}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${project.title} - imagem ${index + 1}`}
                  className={styles.projectImage}
                  onClick={() => setSelectedImage(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <span className={styles.icon}>{project.images}</span>
        )}
      </div>

      <h3 className={styles.title}>{project.title}</h3>

      <p className={styles.desc}>{project.description}</p>

      <div className={styles.skills}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noreferrer">
            Ver Demo
          </a>
        )}

        <a href={project.repoLink} target="_blank" rel="noreferrer">
          Código
        </a>
      </div>

      {/* Lightbox com navegação */}
      {selectedImage !== null &&
        createPortal(
          <div
            className={styles.lightbox}
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              className={styles.closeLightbox}
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar imagem"
            >
              &times;
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className={styles.lightboxPrev}
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  aria-label="Imagem anterior"
                >
                  &#10094;
                </button>

                <button
                  type="button"
                  className={styles.lightboxNext}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Imagem seguinte"
                >
                  &#10095;
                </button>
              </>
            )}

            <div className={styles.imageContainer}>
              <img
                src={images[selectedImage]}
                alt={`${project.title} - imagem ${selectedImage + 1}`}
                className={styles.zoomImage}
                onClick={(e) => e.stopPropagation()}
              />

              <span className={styles.imageCounter}>
                {selectedImage + 1} / {images.length}
              </span>
            </div>
          </div>,
          document.body
        )}
    </article>
  );
}