import type { Struct, Schema } from '@strapi/strapi';

export interface DtsComponentsDtsComponent extends Struct.ComponentSchema {
  collectionName: 'components_dts_components_dts_components';
  info: {
    displayName: 'DTS component';
    icon: 'alien';
  };
  attributes: {
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    Description: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dts-components.dts-component': DtsComponentsDtsComponent;
    }
  }
}
