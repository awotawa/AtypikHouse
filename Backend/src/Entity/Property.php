<?php

namespace App\Entity;

use App\Repository\PropertyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Annotation\ApiResource;

#[ApiResource(
  normalizationContext: ['groups' => ['property:read']],
  denormalizationContext: ['groups' => ['property:write']],
)]
#[ORM\Entity(repositoryClass: PropertyRepository::class)]
class Property
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[Assert\Length([
        'max' => 30,
        'maxMessage' => 'Your newField cannot be longer than {{ limit }} characters',
    ])]
    #[Assert\Regex(['pattern'=>"/^([A-Za-zÀ-ÿ '-]+)$/"])]
    #[ORM\Column(type: 'string', length: 30)]
    #[Groups(["property:read", "property:write", "category:read"])]
    private $newField;

    #[Assert\Length([
        'max' => 30,
        'maxMessage' => 'Your defaultValue cannot be longer than {{ limit }} characters',
    ])]
    #[Assert\Regex(['pattern'=>"/^([A-Za-zÀ-ÿ0-9 '²,.-]+)$/"])]
    #[ORM\Column(type: 'string', length: 30)]
    #[Groups(["property:read", "property:write", "category:read"])]
    private $defaultValue;

    #[ORM\Column(type: 'datetime')]
    private $createdAt;

    #[ORM\Column(type: 'datetime')]
    private $updatedAt;

    #[ORM\OneToMany(mappedBy: 'propertyId', targetEntity: LodgingValue::class, orphanRemoval: true)]
    #[Groups(["property:read", "property:write"])]
    private $lodgingValues;

    #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'properties')]
    #[ORM\JoinColumn(nullable: false)]
    private $categoryId;

    public function __construct()
    {
      $this->createdAt = new \DateTimeImmutable();
      $this->lodgingValues = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNewField(): ?string
    {
        return $this->newField;
    }

    public function setNewField(string $newField): self
    {
        $this->newField = $newField;

        return $this;
    }

    public function getDefaultValue(): ?string
    {
        return $this->defaultValue;
    }

    public function setDefaultValue(string $defaultValue): self
    {
        $this->defaultValue = $defaultValue;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection<int, LodgingValue>
     */
    public function getLodgingValues(): Collection
    {
        return $this->lodgingValues;
    }

    public function addLodgingValue(LodgingValue $lodgingValue): self
    {
        if (!$this->lodgingValues->contains($lodgingValue)) {
            $this->lodgingValues[] = $lodgingValue;
            $lodgingValue->setPropertyId($this);
        }

        return $this;
    }

    public function removeLodgingValue(LodgingValue $lodgingValue): self
    {
        if ($this->lodgingValues->removeElement($lodgingValue)) {
            // set the owning side to null (unless already changed)
            if ($lodgingValue->getPropertyId() === $this) {
                $lodgingValue->setPropertyId(null);
            }
        }

        return $this;
    }

    public function getCategoryId(): ?Category
    {
        return $this->categoryId;
    }

    public function setCategoryId(?Category $categoryId): self
    {
        $this->categoryId = $categoryId;

        return $this;
    }
}
