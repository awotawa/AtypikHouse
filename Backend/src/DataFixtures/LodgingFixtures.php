<?php

namespace App\DataFixtures;

use App\Entity\Lodging;
use DateTime;
use DateTimeInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class LodgingFixtures extends Fixture
{

  public function load(ObjectManager $manager)
  {

    $lodging = new Lodging();
    $lodging->setName("Châlet Albert");
    $lodging->setRate(200);
    $lodging->setLodgingDescription("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, unde? Soluta repellendus ducimus, sit, dicta vero iste culpa, exercitationem fugiat alias aut nesciunt esse! Nam laborum hic iure asperiores aliquam.");
    $lodging->setAdress("Annecy, Auvergne-Rhône-Alpe");
    $lodging->setCheckInTime(new \DateTime('15:52:01+00:00'));
    $lodging->setCreatedAt(new \DateTime('2005-08-15T15:52:01+00:00'));
    $manager->persist($lodging);
    // var_dump($lodging);

    $manager->flush();
  }
}
