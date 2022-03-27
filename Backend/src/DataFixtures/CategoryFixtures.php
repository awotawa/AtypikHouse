<?php

namespace App\DataFixtures;

use App\Entity\Category;
use DateTime;
use DateTimeInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends Fixture
{

  public function load(ObjectManager $manager)
  {


    $category = new Category();


    $category->setType("myType");
    $category->setCreatedAt(new DateTime('03/14/2022'));
    $category->setUpdatedAt(new DateTime('03/15/2022')); 
    $manager->persist($category);

    // var_dump($lodging);

    $manager->flush();
  }
}
