const ServicesList = ({ services = [] }: { services: string[] }) => (
  <ul class="list-disc text-left text-md sm:text-xl">
    {services.map(service => (
        <li class="my-6">{service}</li>
    ))}
  </ul>
);

export default ServicesList;
