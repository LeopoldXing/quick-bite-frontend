import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form.tsx";
import DetailsSection from "@/forms/manage-restaurant-form/DetailsSection.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import CuisinesSection from "@/forms/manage-restaurant-form/CuisinesSection.tsx";
import MenuSection from "@/forms/manage-restaurant-form/MenuSection.tsx";
import ImageSection from "@/forms/manage-restaurant-form/ImageSection.tsx";
import LoadingButton from "@/components/ui/LoadingButton.tsx";
import { Button } from "@/components/ui/button.tsx";

const formSchema = z.object({
  restaurantName: z.string({
    required_error: "Restaurant name is required"
  }),
  city: z.string({
    required_error: "City is required"
  }),
  country: z.string({
    required_error: "Country is required"
  }),
  deliveryPrice: z.coerce.number({
    required_error: "DeliveryPrice is required",
    invalid_type_error: "must be a valid number"
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Estimated delivery time is required",
    invalid_type_error: "must be a valid number"
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "Please select at least one item"
  }),
  menuItems: z.array(z.object({
    name: z.string().min(1, "name is required"),
    price: z.coerce.number().min(1, "price is required")
  }))
});

type RestaurantFormData = z.infer<typeof formSchema>;

type ManageRestaurantFormProps = {
  onSave(): (restaurantFormData: FormData) => void;
  isLoading: boolean;
}
const ManageRestaurantForm = ({ onSave, isLoading = false }: ManageRestaurantFormProps) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }]
    }
  })

  const onSubmit = (formDataJson: RestaurantFormData) => {

  }

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-10 bg-gray-50 rounded-lg">
          <DetailsSection/>
          <Separator/>
          <CuisinesSection/>
          <Separator/>
          <MenuSection/>
          <Separator/>
          <ImageSection/>

          {isLoading ? <LoadingButton/> : <Button type="submit">Submit</Button>}
        </form>
      </Form>
  );
};

export default ManageRestaurantForm;
