<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\User;
use App\Entity\Media;
use App\Entity\Owner;
use DateTimeInterface;
use App\Entity\Lodging;
use App\Entity\Reservation;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class MediaFixtures extends Fixture
{

  public function load(ObjectManager $manager)
  {
    $user0 = new User();
    $user0->setFirstName("John");
    $user0->setLastName("Smith");
    $user0->setEmail("john.smith@yopmail.com");
    $user0->setRoles(["ROLE_USER"]);
    $user0->setPassword("azertyuiop");
    $user0->setPhoto("https://randomuser.me/api/portraits/men/66.jpg");

    $owner0 = new Owner();
    $owner0->setUserId($user0);

    $lodging = new Lodging();
    $lodging->setName("Châlet Albert");
    $lodging->setRate(200);
    $lodging->setLodgingDescription("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, unde? Soluta repellendus ducimus, sit, dicta vero iste culpa, exercitationem fugiat alias aut nesciunt esse! Nam laborum hic iure asperiores aliquam.");
    $lodging->setAdress("Annecy, Auvergne-Rhône-Alpe");
    $lodging->setCheckInTime(new \DateTime('13:00:00+00:00'));
    $lodging->setCreatedAt(new DateTime('03/20/2022'));
    $lodging->setUpdatedAt(new DateTime('03/20/2022'));
    $lodging->setOwnerId($owner0);
    $manager->persist($lodging);
    // var_dump($lodging);

    $media0 = new Media();
    $media0->setLink("https://unsplash.com/photos/Yd59eQJVYAo");
    $media0->setLodgingId($lodging);
    $media0->setMediaType("image");
    // $media0->setCreatedAt(new DateTime('03/20/2022'));
    // $media0->setUpdatedAt(new DateTime('03/20/2022'));
    $manager->persist($media0);

    $media1 = new Media();
    $media1->setLink("https://www.pexels.com/video/person-holding-a-dove-7049271/");
    $media1->setLodgingId($lodging);
    $media1->setMediaType("video");
    // $media0->setCreatedAt(new DateTime('03/20/2022'));
    // $media0->setUpdatedAt(new DateTime('03/20/2022'));
    $manager->persist($media1);

    $manager->flush();
  }
}
