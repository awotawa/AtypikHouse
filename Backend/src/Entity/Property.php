<?php

namespace App\Entity;

use App\Repository\PropertyRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: PropertyRepository::class)]
class Property
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[Assert\Length([
        'max' => 30,
        'maxMessage' => 'Your new_field cannot be longer than {{ limit }} characters',
    ])]
    #[Assert\Regex(['pattern'=>"/^([A-Za-zÀ-ÿ '-]+)$/"])]
    #[ORM\Column(type: 'string', length: 30)]
    private $new_field;

    #[Assert\Length([
        'max' => 30,
        'maxMessage' => 'Your default_value cannot be longer than {{ limit }} characters',
    ])]
    #[Assert\Regex(['pattern'=>"/^([A-Za-zÀ-ÿ0-9 ',.-]+)$/"])]
    #[ORM\Column(type: 'string', length: 30)]
    private $default_value;

    #[ORM\Column(type: 'datetime')]
    private $created_at;

    #[ORM\Column(type: 'datetime')]
    private $updated_at;

    #[ORM\ManyToOne(targetEntity: Category::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $category_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNewField(): ?string
    {
        return $this->new_field;
    }

    public function setNewField(string $new_field): self
    {
        $this->new_field = $new_field;

        return $this;
    }

    public function getDefaultValue(): ?string
    {
        return $this->default_value;
    }

    public function setDefaultValue(string $default_value): self
    {
        $this->default_value = $default_value;

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

    public function getCategoryId(): ?Category
    {
        return $this->category_id;
    }

    public function setCategoryId(?Category $category_id): self
    {
        $this->category_id = $category_id;

        return $this;
    }
}
