<?php

namespace App\DataFixtures;

use App\Entity\LodgingValue;
use DateTime;
use DateTimeInterface;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;

class LodgingValuesFixtures extends Fixture implements DependentFixtureInterface
{

	public function getDependencies()
	{
		return [
			PropertyFixtures::class,
			LodgingFixtures::class,
		];
	}

	public function load(ObjectManager $manager)
	{

		$faker = Faker\Factory::create("fr_FR");

		for ($i=0; $i < 20; $i++) {

			$lodgingValue = new LodgingValue();	
			$lodgingValue->setPropertyId($this->getReference("PROPERTY".mt_rand(0, 20)));
			$lodgingValue->setLodgingId($this->getReference("LODGING".mt_rand(0, 20)));
			$lodgingValue->setValue($faker->randomElement(["disponible", "indisponible"]));
			$lodgingValue->setCreatedAt($faker->dateTime());
			$lodgingValue->setUpdatedAt($faker->dateTime());
			$manager->persist($lodgingValue);
		}

		$manager->flush();
	}
}
