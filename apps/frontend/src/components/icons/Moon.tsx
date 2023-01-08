import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h96v96H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        id="b"
        width={24}
        height={24}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAE1ElEQVR4nO2dXYhVVRTHf9rcazfBr8n8QBsqKSWVEpFUDDIqoqQPsoIeSvqgGgl76Nme0icRikSJpHqKiESMHiIMkl6aEgkbGsVk1EgMHctmMOqeHtZcuMTcO+fuu/daZ9+7f/B/GZi71vrvc84+Z3+cA4lEIpFIJBKJRKLbmGKdQIv0AquB5cAyoA9YAMwFSsBsIANGgO+AB2zS7BwqwEPAHmAQqCIG51EVuFU/5fiZCtwHfAhcIb/hE+kt5dyjZjrQDwzRnun1Ogdco1lEjJQQ43/Dn/EZcBp4BejRKyU+ngRO4Nf4K8BrQFmxjuhYABzCr/EZcARYolhHlGwGfse/+fuRy1miAWXgPfwbnwHbFeuIkl7gMGHMT7eak3Ab8AthzN9PfE/zqiwBzhLG/GPAtXqlxEcf4Y78P5EzK9GAeciDUAjzM+BlvVLiowR8TTjzfyANLzRlH+HMz4B1eqXEx3OENf8LvVLiYyFwkbANsEGtmgg5SFjzv9UrJT6eJqz5GfCiWjWRUQJOEtb8UWCWVkGx0U/4o/8TtWoio0K4oYZ6bdEqKDZeJbz5VWQCJzEBxwjfAINq1RgwtY3/XQ+s9JVIEwYUYpjRTgNo3RYeVYoTFSXgEuEvPxnwoFJNJrieARvQuy8fVopjgmsDPOw1i+acVYwVDYPoXH7+1SrICpcJ7RnI8m+NyfAx4DqFOGa4XILuRG8lwlWlOGa4NMAq71k0ZppiLBNcGmC59ywaU6HDG8GlARZ6z6I5HT0M7dIA2gNjNyvHU8WlAeZ7z6I5y5TjqeLSALO9Z9GcFcrxVGlnME6Le6wTKBpj6DwFd8WEjMsZUPWeRXOmAI8oxyw0F9A9AzI6eE7A5Qz41XsWk3MHsNYgbnBiaQCAN43iBsWlAc55zyIf9wMbjWIHw6UBhrxnkZ+36bCxIZeNDmXgWd+J5GQu0ikfNopfCGYgM1Xad0I1/Y0sielqtKYkG+kMcjZEj+tQxJdes2idRciC3Y7qD1phI7ZnQE0H6NINeyXCb0fKq33EMajonQ+wN7+mj+jCFzOtx974eh1C7tC6igHsja/Xz8DSoBUXjOexN/3/ugy8FLLoIlFBBuesTZ9IB4Ebw5VeHLZib3YjjQI76fC+oQycwt7sZjqPvNbshoAezAv027l4FHuT82gMuWXdhJ+n6LuAd5CXEJ4AZnr4TWcOYG9wKxoBPgPeQDaczJmkvlnIuth+4GMm7vs+pcWFyz5XOS9Gdk1qrxvyySiyI+evur9NQzrzvP3I68Buz3nl5nHsj2xrPdO2i22yB3sTrPSuB//apgR8hb0Z2vqGAg2P9+L3NfRF19B4zYViMcV/PvChYeAmT5555xZk+tDapFA6M15joekDfsLeLN86SQTm15iDdFLWpvnSEeB6rw4p0IMMjLXyJaQiai+Rf53jCcJ8wCG0LgJPBfDDhPnIOIy1qXn1ObIUpuPYhEwjWhvcSKeBx4JVXxBKyKTOMPaG13Qe2EaBnmw1KAMvAD9iZ/zAeA7TA9daeNYiH/zR6KxHgPeBNSqVRUYPcC+wC/ge+If2Da8ie852AHdjvKArtg/gzET2i60AbkfuTBYhc70V5NJRBf4Y12VkU+EQcBx5Ij+OvO8ukUgkEolEIpFIJEz4D4Dio6nhiAVOAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export default SvgComponent;
