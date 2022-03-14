<?php

namespace App\DataFixtures;

use App\Entity\Lodging;
use App\Entity\Owner;
use App\Entity\Category;
use DateTime;
use DateTimeInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class LodgingFixtures extends Fixture
{

  public function load(ObjectManager $manager)
  {

    $lodging = new Lodging();
    $owner = new Owner();
    $category = new Category();
    
    $lodging->setName("Châlet Albert");
    $lodging->setRate(200);
    $lodging->setLodgingDescription("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, unde? Soluta repellendus ducimus, sit, dicta vero iste culpa, exercitationem fugiat alias aut nesciunt esse! Nam laborum hic iure asperiores aliquam.");
    $lodging->setAdress("Annecy, Auvergne-Rhône-Alpe");
    $lodging->setCheckInTime(new \DateTime('15:52:01+00:00'));
    $lodging->setCreatedAtAutomatically();
    $lodging->setUpdatedAtAutomatically();
    $lodging->setOwnerId($owner->getId());
    $lodging->setCategoryId($category->getId());

    $manager->persist($lodging);
    // var_dump($lodging);

    $manager->flush();
  }
}
