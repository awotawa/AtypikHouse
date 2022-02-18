<?php

namespace App\Entity;

use App\Repository\ReviewRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReviewRepository::class)]
class Review
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $rating;

    #[ORM\Column(type: 'text')]
    private $review_title;

    #[ORM\Column(type: 'text')]
    private $review_description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(int $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getReviewTitle(): ?string
    {
        return $this->review_title;
    }

    public function setReviewTitle(string $review_title): self
    {
        $this->review_title = $review_title;

        return $this;
    }

    public function getReviewDescription(): ?string
    {
        return $this->review_description;
    }

    public function setReviewDescription(string $review_description): self
    {
        $this->review_description = $review_description;

        return $this;
    }
}
