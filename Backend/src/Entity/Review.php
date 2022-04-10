<?php

namespace App\Entity;

use App\Repository\ReviewRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Annotation\ApiResource;

#[ApiResource()]
#[ORM\Entity(repositoryClass: ReviewRepository::class)]
class Review
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[Assert\Range([
        'min' => 1,
        'max' => 10,
    ])]
    #[Assert\Regex(['pattern' => "/^([1-9]|10)$/"])]
    #[ORM\Column(type: 'integer', length: 10)]
    private $rating;

    #[Assert\Length([
        'max' => 100,
        'maxMessage' => 'Your review title cannot be longer than {{ limit }} characters',
    ])]
    #[Assert\Regex(['pattern'=>"/^([A-Za-zÀ-ÿ '!-]+)$/"])]
    #[ORM\Column(type: 'text', length: 100)]
    private $review_title;

    #[Assert\Length([
        'max' => 255,
        'maxMessage' => 'Your review description cannot be longer than {{ limit }} characters',
    ])]
    #[Assert\Regex(['pattern'=>"/^([A-Za-zÀ-ÿ '!-]+)$/"])]
    #[ORM\Column(type: 'text', length: 255)]
    private $review_description;

    #[ORM\Column(type: 'datetime')]
    private $created_at;

    #[ORM\Column(type: 'datetime')]
    private $updated_at;

    #[ORM\ManyToOne(targetEntity: Owner::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $owner_id;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $user_id;

    #[ORM\ManyToOne(targetEntity: Lodging::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $lodging_id;

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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getOwnerId(): ?Owner
    {
        return $this->owner_id;
    }

    public function setOwnerId(?Owner $owner_id): self
    {
        $this->owner_id = $owner_id;

        return $this;
    }

    public function getUserId(): ?User
    {
        return $this->user_id;
    }

    public function setUserId(?User $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getLodgingId(): ?Lodging
    {
        return $this->lodging_id;
    }

    public function setLodgingId(?Lodging $lodging_id): self
    {
        $this->lodging_id = $lodging_id;

        return $this;
    }
}
