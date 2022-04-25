<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use App\Repository\LodgingRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

#[ApiResource(attributes: ["pagination_maximum_items_per_page" => 10])]
#[ORM\Entity(repositoryClass: LodgingRepository::class)]
#[ApiFilter(SearchFilter::class, properties:['adress' => 'partial'])]
class Lodging
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[Assert\NotBlank()]
    #[Assert\Length([
      'min' => 2,
      'max' => 50,
      'minMessage' => 'The name must be at least {{ limit }} characters long',
      'maxMessage' => 'The name cannot be longer than {{ limit }} characters',
      ])]
    #[Assert\Regex(['pattern'=>"/^([A-Za-zÀ-ÿ '-]+)$/"])]
    #[ORM\Column(type: 'string', length: 50)]
    private $name;

    #[Assert\NotBlank()]
    #[Assert\Range([
        'min' => 0.01,
        'max' => 9999.99
    ])]
    #[Assert\Regex(['pattern' => "/^([0-9]+(\.[0-9]{0,2})?)$/"])]
    #[ORM\Column(type: 'float')]
    private $rate;

    #[Assert\NotBlank()]
    #[Assert\Length([
        'min' => 50,
        'max' => 255,
        'minMessage' => 'Your description must be at least {{ limit }} characters long',
        'maxMessage' => 'Your description cannot be longer than {{ limit }} characters',
    ])]
    #[Assert\Regex(['pattern' => "/^([A-Za-z0-9À-ÿ ',:?()~&\.-]+)$/"])]
    #[ORM\Column(type: 'text', length: 255)]
    private $lodgingDescription;

    #[Assert\NotBlank()]
    #[Assert\Length([
        'max' => 50,
        'maxMessage' => 'Your adress cannot be longer than {{ limit }} characters',
    ])]
    #[ORM\Column(type: 'text', length: 50)]
    private $adress;

    #[ORM\Column(type: 'time')]
    private $checkInTime;

    #[ORM\Column(type: 'datetime')]
    private $createdAt;

    #[ORM\Column(type: 'datetime')]
    private $updatedAt;

    #[ORM\ManyToOne(targetEntity: Owner::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $ownerId;

    #[ORM\ManyToOne(targetEntity: Category::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $categoryId;

    public function __construct()
    {
      $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getRate(): ?float
    {
        return $this->rate;
    }

    public function setRate(float $rate): self
    {
        $this->rate = $rate;

        return $this;
    }

    public function getLodgingDescription(): ?string
    {
        return $this->lodgingDescription;
    }

    public function setLodgingDescription(string $lodgingDescription): self
    {
        $this->lodgingDescription = $lodgingDescription;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getCheckInTime(): ?\DateTimeInterface
    {
        return $this->checkInTime;
    }

    public function setCheckInTime(\DateTimeInterface $checkInTime): self
    {
        $this->checkInTime = $checkInTime;

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

    public function getOwnerId(): ?Owner
    {
        return $this->ownerId;
    }

    public function setOwnerId(?Owner $ownerId): self
    {
        $this->ownerId = $ownerId;

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

    public function setCreatedAtAutomatically()
    {
        if ($this->getCreatedAt() === null) {
            $this->setCreatedAt(new \DateTime());
        }
    }


}
