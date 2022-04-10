<?php

namespace App\Entity;

use App\Repository\MediaRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Annotation\ApiResource;

#[ApiResource()]
#[ORM\Entity(repositoryClass: MediaRepository::class)]
class Media
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $media_type;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\Regex(['pattern' => "/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&=]*))/"])]
    private $link;

    #[ORM\ManyToOne(targetEntity: Lodging::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $lodging_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMediaType(): ?string
    {
        return $this->media_type;
    }

    public function setMediaType(string $media_type): self
    {
        $this->media_type = $media_type;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

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
