<?php

namespace App\Entity;

use App\Repository\LodgingRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: LodgingRepository::class)]
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
    private $lodging_description;

    #[Assert\NotBlank()]
    #[Assert\Length([
        'max' => 50,
        'maxMessage' => 'Your adress cannot be longer than {{ limit }} characters',
    ])]
    #[ORM\Column(type: 'text', length: 50)]
    private $adress;

    #[ORM\Column(type: 'time')]
    private $check_in_time;

    #[ORM\Column(type: 'datetime')]
    private $created_at;

    #[ORM\Column(type: 'datetime')]
    private $updated_at;

    #[ORM\ManyToOne(targetEntity: Owner::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $owner_id;

    #[ORM\ManyToOne(targetEntity: Category::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $category_id;

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
        return $this->lodging_description;
    }

    public function setLodgingDescription(string $lodging_description): self
    {
        $this->lodging_description = $lodging_description;

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
        return $this->check_in_time;
    }

    public function setCheckInTime(\DateTimeInterface $check_in_time): self
    {
        $this->check_in_time = $check_in_time;

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

    public function getCategoryId(): ?Category
    {
        return $this->category_id;
    }

    public function setCategoryId(?Category $category_id): self
    {
        $this->category_id = $category_id;

        return $this;
    }

    public function setCreatedAtAutomatically()
    {
        if ($this->getCreatedAt() === null) {
            $this->setCreatedAt(new \DateTime());
        }
    }


}
